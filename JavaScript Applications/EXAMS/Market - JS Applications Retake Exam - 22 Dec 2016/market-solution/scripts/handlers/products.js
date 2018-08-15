handlers.getProducts = function (context) {
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    loader(context, './templates/products/shop/shop.hbs', null, loadProducts);

    async function loadProducts() {
        let products;

        try {
            products = await remote.get('appdata', 'products');

            products.forEach(p => {
                p.price = (Math.round(p.price * 100) / 100).toFixed(2)
            });
            context.products = products;
        } catch (err) {
            let msg = 'Error occurred while getting products!';
            handleErrors(err, msg);
            return;
        }

        let toRender = './templates/products/shop/productList.hbs';
        context.render(toRender).then(function () {
            this.replace('#shopProducts').then(() => {
                $('.purchase').click((event) => purchaseProduct(event))
            });
        });
    }

    async function purchaseProduct(event) {
        let buttonClicked = $(event.target);
        let productId = buttonClicked.attr('data-id');
        let userId = localStorage.getItem('id');
        let user;

        try {
            user = await remote.get('user', userId);
        } catch (err) {
            let msg = 'Something went wrong! Invalid user!';
            let auth = {
                change: true,
                isAuth: false
            };
            handleErrors(err, msg, auth);
            return;
        }

        let cart = user.cart;
        let product = null;

        context.products.forEach(p => {
            if (p._id === productId) {
                return product = p;
            }
        });

        if (product) {
            if (cart[productId]) {
                let currentQty = cart[productId].quantity * 1.0;
                cart[productId].quantity = (currentQty + 1).toString();
            } else {
                cart[productId] = {
                    quantity: '1',
                    product: {
                        name: product.name,
                        description: product.description,
                        price: product.price
                    }
                };
            }
        } else {
            return notifications.showError('This product does not exist!');
        }

        try {
            await remote.update('user', userId, user);
            notifications.showInfo('Product purchased.');
            context.redirect('#/cart');
        } catch (err) {
            let msg = 'Product cannot be added to the cart!';
            let auth = {
                change: true,
                isAuth: false
            };
            handleErrors(err, msg, auth);
        }
    }
};

handlers.getCart = function (context) {
    context.isAuth = isAuth;
    context.username = utils.getUsername();

    loader(context, './templates/products/cart/cart.hbs', null, loadCart);

    async function loadCart() {
        let userId = localStorage.getItem('id');
        let user;
        let products = [];

        try {
            user = await remote.get('user', userId);
            let productsInCart = user.cart;

            for (let productId in productsInCart) {
                let productData = productsInCart[productId];
                let productPrice = productData.product.price;
                let totalPrice = productPrice * productData.quantity;

                let product = {
                    id: productId,
                    name: productData.product.name,
                    description: productData.product.description,
                    quantity: productData.quantity,
                    totalPrice: (Math.round(totalPrice * 100) / 100).toFixed(2),
                };

                products.push(product);
            }
            context.products = products;
        } catch (err) {
            let msg = 'Error occurred while getting products!';
            handleErrors(err, msg);
            return;
        }

        let toRender = './templates/products/cart/productsList.hbs';
        context.render(toRender).then(function () {
            this.replace('#cartProducts').then(() => {
                $('.discard').click((event) => discardProduct(event))
            });
        });
    }

    async function discardProduct(event) {
        let buttonClicked = $(event.target);
        let productId = buttonClicked.attr('data-id');
        let userId = localStorage.getItem('id');
        let user;

        try {
            user = await remote.get('user', userId);
        } catch (err) {
            let msg = 'Error occurred while getting products!';
            let auth = {
                change: true,
                isAuth: false
            };
            handleErrors(err, msg, auth);
            return;
        }

        let cart = user.cart;
        let product = null;

        context.products.forEach(p => {
            if (p.id === productId) {
                return product = p;
            }
        });

        if (product) {
            if (cart[productId]) {
                delete cart[productId];
            } else {
                return notifications.showError('You cannot discard a product, which is not present in your cart!')
            }
        } else {
            return notifications.showError('You cannot discard a product, which is not present in your cart!')
        }

        try {
            await remote.update('user', userId, user);
            notifications.showInfo('Product discarded.');
            $(event.target).parent().parent().remove();
        } catch (err) {
            let msg = 'Product cannot be discarded from your cart!';
            let auth = {
                change: true,
                isAuth: false
            };
            handleErrors(err, msg, auth);
        }
    }
};