const main = () => {
    setTimeout(() => {
        callback();
        setTimeout(() => {
            callback();
            setTimeout(() => {
                callback();
                setTimeout(() => {
                    callback();
                }, 5000);
            }, 5000);
        }, 7000);
    }, 3000);
}; 

main();