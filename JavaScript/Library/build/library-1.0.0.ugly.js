!function(){var a=this,b="com",c=a[b],d=a.System.noConflict(),e=d.using,f=e("System.Exception"),g=e("System.Namespace"),h=(e("System.Static"),e("System.Class")),i=e("System.Interface"),j=(e("System.Enum"),d.setGlobal({}));d.disableAutoLoad(!0),g("com.example",h("MyClass",{constructor:function(){throw new com.example.exception.MyCustomException("This is a bad Class")}})),h("com.example.SingleClass",{$implements:"com.example.iface.Comparable",constructor:function(){},compareTo:function(a){if(a){if(a.is(this.getClass()))return this.time<a.time?-1:this.time==a.time?0:1;throw new f("The supplied object is not instance of "+this.getClass().getFullPath(),"ClassCastException")}throw new f("The supplied object cannot be null","NullPointerException")}}),g("com.example.exception",h("MyCustomException",{$extends:f,constructor:function(a){this.$base(a)}})),i("com.example.iface.Comparable",{compareTo:function(a){}}),d.disableAutoLoad(!1),d.setGlobal(a),j=j[b];var k=[];j.noConflict=function(d){var e=j;return(c||d===!0)&&(a[b]=c),e},j.ready=function(){if(arguments.length>0){var b=arguments[0],c=!d.Environment.isBrowser()&&arguments[1]===!0;if(!isFunction(b))throw new d.exception.InvalidArgumentsException("Supplied arguments are invalid, expected (Function/Boolean)");c===!1?b.call(a,d):k.push(b)}},d.Environment.isBrowser()&&(document.onreadystatechange=function(){if("complete"==document.readyState)for(var b in k)d.hasProp(k,b)&&k[b].call(a,j)}),a[b]=j,d.Environment.isNode()&&(module.exports=j)}(this);