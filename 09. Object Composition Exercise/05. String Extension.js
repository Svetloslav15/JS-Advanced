(function () {
    String.prototype.ensureStart = function (string) {
        if (!this.toString().startsWith(string)){
            return string + this.toString();
        }
        return this.toString();
    };
    String.prototype.ensureEnd = function (string) {
        if (!this.toString().endsWith(string)){
            return this.toString() +  string;
        }
        return this.toString();
    };
    String.prototype.isEmpty = function () {
        if (this.length === 0){
            return true;
        }
        return false;
    };
    String.prototype.truncate = function (n) {
        if(n <= 3){
            return ".".repeat(n);
        }
        if(this.toString().length <= n){
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if(lastIndex != -1){
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n-3) + "...";
            }
        }
    };
    String.format = function (string, ...params) {
        for(let i=0; i<params.length; i++){
            let index = string.indexOf("{"+i+"}");
            while (index != -1) {
                string = string.replace("{"+i+"}", params[i]);
                index = string.indexOf("{"+i+"}");
            }
        }
        return string;
    }
}());