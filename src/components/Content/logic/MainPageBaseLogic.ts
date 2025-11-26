
abstract class MainPageBaseLogic{
    constructor(){
        console.log("MainPageBaseLogic constructor");
        this.initContent();
    }
    protected abstract content :JSX.Element;
    protected abstract initContent():void;
    public showContent():JSX.Element{
        return this.content;
    };
} 

export {MainPageBaseLogic};