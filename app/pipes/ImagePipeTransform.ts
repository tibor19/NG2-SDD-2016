import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'image'
})
export class ImagePipeTransform implements PipeTransform {
    transform(value: string, args : any[]){
        if(value)
            return `content/images/food/${value}.jpg`;
        else
            return `content/images/food/404.png`;
    }
}