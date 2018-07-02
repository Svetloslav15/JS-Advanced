class Request{
    constructor(method, uri, version, message){
        this.method = method;
        this.url = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}