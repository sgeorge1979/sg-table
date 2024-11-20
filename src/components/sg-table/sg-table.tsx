import { Component, h, Prop } from '@stencil/core';


@Component({
  tag: 'sg-table',
  styleUrl: 'sg-table.css',
})
export class SgTable {
  @Prop() dataUrl: string;

  @Prop() theme: string;

  @Prop() paging: boolean = false;

  @Prop() ordering: boolean = false;

  @Prop() info: boolean = false;

  @Prop() searching: boolean = false;

  @Prop() print: boolean = false;

  render() {
    return [
      
       <sg-content  dataUrl={this.dataUrl} print={this.print} paging={this.paging} ordering={this.ordering} info={this.info} 
           searching={this.searching} theme={this.theme} >
       </sg-content>
  
    ];
  }
}
