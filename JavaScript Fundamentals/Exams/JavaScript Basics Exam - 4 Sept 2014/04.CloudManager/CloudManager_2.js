function storeFiles(arr){
    arr = arr.filter(el => el !== "");
    let filesStorage = new Map();

    for(let file of arr){
        let [fileName, extension, fileSize] = file.split(" ").filter(el => el !== "");
        fileSize = Number(fileSize.match(/[0-9]+(\.[0-9]+)?/)[0]);

        if(! filesStorage.has(extension)){
            filesStorage.set(extension, {
                files: [],
                memory: 0,
            })
        }

        filesStorage.get(extension).files.push(fileName);
        filesStorage.get(extension).memory += fileSize;
    }

    let sortedMap = [...filesStorage].sort((a, b) => {
        if(a[0] > b[0]) return 1;
        if(a[0] < b[0]) return -1;
        return 0;
    });
    let sortedObj = {};

    for(let extensionData of sortedMap){
        sortedObj[extensionData[0]] = {
            files: extensionData[1].files.sort(),
            memory: extensionData[1].memory.toFixed(2),
        };
    }
    console.log(JSON.stringify(sortedObj));
}

/* Uncomment to test:
storeFiles([
    "sentinel .exe 15MB",
    "zoomIt .msi 3MB",
    "skype .exe 45MB",
    "trojanStopper .bat 23MB",
    "kindleInstaller .exe 120MB",
    "setup .msi 33.4MB",
    "winBlock .bat 1MB",
    ""
]);

storeFiles([
    "eclipse .tar.gz 198.00MB",
    "uTorrent .gyp 33.02MB",
    "nodeJS .gyp 14MB",
    "nakov-naked .jpeg 3MB",
    "gnuGPL .pdf 5.6MB",
    "skype .tar.gz 66MB",
    "selfie .jpeg 7.24MB",
    "myFiles .tar.gz 783MB",
    ''
]);
*/