import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetImage',
  standalone: true
})
export class AssetImagePipe implements PipeTransform {
  transform(image: string, assetsPath: string = 'assets'): any {
    return `${assetsPath}/${image}`;
  }
}
