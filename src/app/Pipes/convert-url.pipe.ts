import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUrl'
})
export class ConvertUrlPipe implements PipeTransform {

  transform(value: string): string {
    return value == 'cho-thue'? 'Cho thuê':(
      value == 'mua-ban'? 'Mua bán': (
        value == 'can-ho-chung-cu'? 'Căn hộ chung cư': (
          value == 'nha-o'? 'Nhà ở': (
            value == 'dat-nen'? 'Đất nền': (
              value == 'van-phong-mat-bang'? 'Văn phòng, cửa hàng': (
                value == 'phong-tro'? 'Phòng trọ': ''
              )
            )
          )
        )
      )
    )
  }

}
