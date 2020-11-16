var DomainConf =(function () {
    // 单例实例引用
    var _instance = null;
    // 单例
    function Single() {
        // 判断环境
        var env = "PRODUCTION";
        if(location.host.indexOf('lenovouat') >= 0){
            env = 'TEST';
        }
        // 私有属性
        var conf = {
            TEST : {
                OFFICIAL : '//www.lenovouat.com',
                SHOP: '//shop.lenovouat.com',
                PAPI: '//papi.lenovouat.com',
                OPEN: '//open.lenovouat.com',
                ADMIN: '//admin.lenovouat.com',
				PROMOTION: '//promotion.lenovouat.com',
				SEARCH: '//s.lenovouat.com'
            },
            PRODUCTION : {
                OFFICIAL : '//www.lenovo.com.cn',
                SHOP: '//shop.lenovo.com.cn',
                PAPI: '//papi.lenovo.com.cn',
                OPEN: '//open.lenovo.com.cn',
                ADMIN: '//admin.lenovo.com.cn',
				PROMOTION: '//promotion.lenovo.com.cn',
				SEARCH: '//s.lenovo.com.cn'
            }
        };

        // 返回取值器对象
        return {
            // 取值器方法
            get : function (name) {
                if (!name) {
                    return conf;
                }
                return conf[env][name] ? conf[env][name] : null;
            }
        }
    }

    // 获取单例对象接口
    return function () {
        if (!_instance) {
            _instance = Single();
        }
        // 返回单例
        return _instance;
    }
})();

// console.log(DomainConf().get('OFFICIAL'));
// console.log(DomainConf().get())