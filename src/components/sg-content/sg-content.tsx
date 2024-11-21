import { Component, h, Prop, State, Watch } from '@stencil/core';
import $ from 'jquery';
import 'datatables.net';


@Component({
  tag: 'sg-content',
  styleUrl: 'sg-content.css',
})
export class SgContent {
  @Prop() dataUrl: string;

  @Prop() theme: string;

  @Prop() paging: boolean = false;

  @Prop() ordering: boolean = false;

  @Prop() info: boolean = false;

  @Prop() searching: boolean = false;

  @Prop() print: boolean = false;

  @State() contents: any;

  @State() isLoading: boolean = true;


  componentWillLoad() {
      this.fetchContent()
  }
  

  render() {
      let content = this.isLoading ? this.renderLoading() : this.renderTable()
      return content;
  }

  componentDidRender() {
      $("#sg-table").DataTable({
        searching : this.searching,
        info: this.info,
        ordering: this.ordering,
        paging: this.paging,
      })
      //this.removeDataTableElements();
  }

  renderLoading() {
      return (
          <div class={'loading'}>
          </div>
      )
  }

  renderTable() {
      return (
        <div id="sg-table-div">
          <table id={'sg-table'} class={'display'}  >
              {this.renderTableHead()}
              {this.renderTableBody()}
          </table>
         </div> 
      )
  }

  renderTableHead() {
      const heads = Object.keys(this.contents[0])
      return (
          <thead>
            {this.print && (
              <button onClick={this.downloadPdf} id="non-printable">Print</button> 
            )}
  
       
              <tr>
                  {heads.map(head =>
                      (<th class={this.theme}>
                       <strong style={{textTransform: 'capitalize'}}>{head}</strong>
                     </th>)
                  )}
              </tr>
          </thead>
      )
  }

 downloadPdf() {
  setTimeout(() => window.print(), 100);
  }

  renderTableBody() {
      return (
          <tbody>
              {this.contents.map((item: any) =>
                  (<tr>
                      {Object.keys(this.contents[0]).map(key =>
                          (
                              <td>{this.parseContent(item, key)}</td>
                          )
                      )}
                  </tr>)
              )}
          </tbody>
      )
  }

  parseContent(item: any, key: string) {
      let content = item[key]
      const css_ = { float: 'left', marginRight: '20px' }
      if (typeof content === 'object') {
          //complex object
          if (typeof content[Object.keys(content)[0]] === 'object') {
              // display left-right
              content = Object.keys(content).map(key =>
                  (
                      <div style={css_}>
                          <strong>{key}</strong> <br />
                          {this.stripJSON(content[key])}
                      </div>
                  )
              )
          } else {
              // display top-down
              content = this.stripJSON(content)
          }
      }
      return content
  }

  stripJSON(value: any) {
      return JSON.stringify(value).replace(/{|}|"/gm, '').replace(/,/g, '\n')
  }

  @Watch('dataUrl')
  fetchContent() {
      this.removeDataTableElements()
      this.isLoading = true;
      fetch(this.dataUrl)
          .then((response: Response) => response.json())
          .then(response => {
              this.contents = response;
              this.isLoading = false;
          });
  }

  removeDataTableElements() {
      let removedElements = ['.dataTables_length', '.dataTables_filter', '.dataTables_info', '.dataTables_paginate']
      removedElements.forEach(el => $(el).remove())
  }
}
