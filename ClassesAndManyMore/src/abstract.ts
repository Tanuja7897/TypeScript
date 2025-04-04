//abstract class does not have any obj 
//Abstract classes can have both abstract (pure) methods and concrete implementations.
// Interfaces, however, enforce 100% abstraction (pure abstraction).
//does not  Supports multiple inheritance only single heritance
abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        
        return 8
    }
}


class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
        ){
            super(cameraMode, filter)
        }

        getSepia(): void {
            console.log("Sepia");
            
        }
}

const hc = new Instagram("test", "Test", 3)

hc.getReelTime()