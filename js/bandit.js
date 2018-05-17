'use strict';

var bandit = {};

!function(a,b,c,d){
    function spin(e,i,n){
        for (i = 0; c[i]; i += 1) {
            c[i].style.transition = 'transform ' + (2 + i * 17 % 11 % c.length) + 's';
            c[i].style.transform = 'rotateX(3600deg)';
        }
        return true;
    }
    function wheel(s,w,a,i,n,t,z){
        w = d.createElement('div');
        w.className = 'wheel &col &ai-c &jc-c';
        a = d.createElement('div');
        a.className = 'axle';
        a.style.transform = 'rotateX(-' + s * 36 + 'deg)';
        w.appendChild(a);
        c.push(a);
        z = 'stop ';
        for (i = 0; i < 10; i += 1) {
            n = d.createElement('div');
            n.className = z + 'digit &col &ai-c &jc-c';
            t = d.createElement('h1');
            t.appendChild(d.createTextNode((Number(s) + i) % 10));
            n.appendChild(t);
            a.appendChild(n);
            a = n;
            z = '';
        }
        b.appendChild(w);
    }
    function init(n, i, l){
        a = parseInt(n).toString().split('');
        l = a.length;
        for (i = 0; i < l; i += 1) {
            wheel(a[i]);
        }
        return true;
    }
    function go(e){
        d = e.target;
        c = [];
        b = d.querySelector('#display');
        //b.addEventListener('click',spin);
    }
    this.init = init;
    this.spin = spin;
    window.addEventListener('load',go);
}.apply(bandit);