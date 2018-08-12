function storeFiles(arr){
    arr = arr.filter(el => el !== "");

    let filesStorage = {};

    for(let file of arr){
        let [fileName, extension, fileSize] = file.split(" ").filter(el => el !== "");
        // ??? Is 25MB always or there is a space ??? -> OK
        fileSize = Number(fileSize.slice(0, fileSize.length - 2));

        //console.log(fileSize);
        if(!(extension in filesStorage)){
            filesStorage[extension] = {
                files: [],
                memory: 0,
            };
        }

        // ??? Should they be unique or not ??? -> OK
        filesStorage[extension].files.push(fileName);
        filesStorage[extension].memory += fileSize;
    }

    // ??? Not that kind of sort ??? localeCompare ???? -> OK
    let sortedExtensions = Object.keys(filesStorage).sort();

    let sortedObj = {};
    for(let ext of sortedExtensions){
        sortedObj[ext] = {
            files: filesStorage[ext].files.sort(),
            memory: filesStorage[ext].memory.toFixed(2),
        }
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