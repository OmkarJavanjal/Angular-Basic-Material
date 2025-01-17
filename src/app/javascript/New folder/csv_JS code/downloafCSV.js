    
    filterVelocity = [{ name: "Velocity1", age: "12"  }, { name: "Velocity2", age: "12"  },
    { name: "Velocity3", age: "12"  }, { name: "Velocity4", age: "12"  }];

    loadData:any;

    
    convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }

    exportCSVFile(headers, items, fileTitle) {
        if (headers) {
            items.unshift(headers);
        }
        var jsonObject = JSON.stringify(items);
        var csv = this.convertToCSV(jsonObject);
        var exportedFilenmae = fileTitle + '.csv' || 'export.csv';
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { 
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) {
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    downLoad(){
        console.log('this.loadData---', this.filterVelocity);
        if(this.filterVelocity.length>0){
          var headers = {
              name: 'User Name',
              age: 'User Age'
          };
          var itemsFormatted = [];
          this.filterVelocity.forEach((item) => {
              itemsFormatted.push({
                  name: item.name,
                  age: item.age
              });
          });
            var fileTitle = 'orders';
            this.exportCSVFile(headers, itemsFormatted, fileTitle);
            }
        }





    // Inside HTML file use 
    <span class="openModalData">
  <button type="button" class="btn btn-primary" (click)="downLoad()">DownLoadData</button>
</span>    