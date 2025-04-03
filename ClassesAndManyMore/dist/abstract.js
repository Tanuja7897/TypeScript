"use strict";
//abstract class does not have any obj 
//Abstract classes can have both abstract (pure) methods and concrete implementations.
// Interfaces, however, enforce 100% abstraction (pure abstraction).
//does not  Supports multiple inheritance only single heritance
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("test", "Test", 3);
hc.getReelTime();
