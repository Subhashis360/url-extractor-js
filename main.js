const urlSet = new Set();
[...document.getElementsByTagName('a')].forEach(url => {
    if (url.href && url.href.includes('://') && !urlSet.has(url.href)) {
        console.log(url.href);
        urlSet.add(url.href);
    }
});

//copy this and open any website you wanto to extract links > paste in console and Boom
