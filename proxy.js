// This file will explain us how we use proxies to maintain libraries

const legacyFontSize = {
    'extraLarge': {
        'replacementName': 'huge',
        'replacementValue': 'huge'
    },
    'extraSmall': {
        'replacementName': 'tiny',
        'replacementValue': 'tiny'
    }
}

const fontSize = {
    'huge': 'huge',
    'large': 'large',
    'medium': 'medium',
    'small': 'small',
    'tiny': 'tiny'
}


const proxyConfig = {
    get: (target, propName, receiver) => {

        if(propName in legacyFontSize) {
            const legacyFont = legacyFontSize[propName];
            console.warn(`${propName} is deprecated please use ${legacyFont.replacementName} instead`);
            return legacyFont.replacementValue;
        }

        return Reflect.get(target, propName, receiver)
    }
}


const proxy = new Proxy(fontSize, proxyConfig);

export default proxy;


/** 

if we console.log(proxy) we will get the following output

{
    huge: "huge",
    large: "large",
    medium: "medium",
    small: "small",
    tiny: "tiny"
}


if we try to console.log(proxy.extraLarge) we will get the following output

"extraLarge is deprecated please use huge instead"
"huge"

*/ 