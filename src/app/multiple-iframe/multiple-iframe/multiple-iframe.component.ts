import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-multiple-iframe',
  templateUrl: './multiple-iframe.component.html',
  styleUrls: ['./multiple-iframe.component.scss'],
})
export class MultipleIframeComponent implements OnInit, OnDestroy {
  iframeListing: any;
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.iframeListing = [
      this.sanitizer.bypassSecurityTrustHtml(
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/wWX60Gx5FBQ?si=LSbW0Kt06NI9PJD9&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
      ),
    ];

    // let ele = document.getElementsByClassName('iframes');
    // for (let i = 0; i < ele.length; i++) {
    //   ele[i].addEventListener("mouseover", (event) => {})
    // }
  }

  makeIframeLink(link:string){
    if(link.indexOf('youtu')){
      link = link.slice(link.lastIndexOf('/'));
      let str = `<iframe width="560" height="315" src="https://www.youtube.com/embed${link}&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      this.iframeListing.push(
        this.sanitizer.bypassSecurityTrustHtml(str)
      );
    }else{
      alert('Please Add Valid Link');
    }
  }

  addIframe() {
    let iframe: HTMLInputElement = document.getElementById(
      'iframeInput'
    ) as HTMLInputElement;

    if(iframe.value && iframe.value.indexOf('iframe') < 0){
      this.makeIframeLink(iframe.value);
      return;
    }

    if(this.iframeListing.length >= 1){
      iframe.value && this.iframeListing.push(
        this.sanitizer.bypassSecurityTrustHtml(iframe.value.indexOf('youtube') ? this.addMutedAutoplay(iframe.value) : iframe.value)
      );
    }else{
      this.iframeListing[0] = this.sanitizer.bypassSecurityTrustHtml(iframe.value.indexOf('youtu') ? this.addMutedAutoplay(iframe.value) : iframe.value);
    }
  }

  addMutedAutoplay(str: string) {
    let ar = str.split(' ');
    if(ar[3]){
      let arr = ar[3].split('?');
      arr[1] && (arr[1] = arr[1].slice(0, arr[1].indexOf('"')) + '&autoplay=1&mute=1"');
      ar[3] && (ar[3] = arr.join('?'));
    }
    return ar.join(' ');
  }

  editWidth() {
    let iframe: HTMLInputElement = document.getElementById(
    'iframeInput'
    ) as HTMLInputElement;
    this.iframeListing.push(
      this.sanitizer.bypassSecurityTrustHtml(this.changeWidth(iframe.value,450))
    );
  }

  changeWidth(str: string, width: number) {
    let arr = str.split(' ');
    if(arr[1]){
      let sa = arr[1].split('=');
      sa[1] = `"` + width + `"`;
      let fsa = sa.join('=');
      arr[1] = fsa;
    }
    return arr.join(' ');
  }

  ngOnDestroy(): void {
    console.log('mulipleIframe Destroy');
  }
}
