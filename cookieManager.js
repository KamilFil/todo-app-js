const EXPIRE = 1;


export class CookieManager {
    setCookie(name, value, days = EXPIRE) {
        let expires = ''
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }


    getCookie(cname) {
        let name = cname + '=';
        let ca = document.cookie.split(';');

         for(let i = 0; i < ca.length; i++)
             {
                let c = ca[i].trim()
                if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
             }
         return null;
    }

}