function hots(){
	_this.$http.get('http://tv.cztv.com/block/1107.json')
	  .then(function (res) {
	    if(res.status==200){
	    	let o;
	    	let Lists = [];
	    	let block = res.data.blockContent;
	    	for(o in block){
	    		if(o<8){
	    			let b = {
	    				src : block[o].tvPic,
	    				title: block[o].shorDesc,
	    				vid : block[o].content
	    			};
	    			Lists.push(b);
	    		}
	    	}
	    	_this.hotLists = Lists
	    }
	    trump();
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
};
function trump(){
	_this.$http.get('http://tv.cztv.com/block/2135.json')
	  .then(function (res) {
	    if(res.status==200){
	    	let o;
	    	let Lists = [];
	    	let block = res.data.blockContent;
	    	for(o in block){
	    		if(o<12){
	    			let b = {
	    				src : block[o].tvPic,
	    				title: block[o].shorDesc,
	    				vid : block[o].content
	    			};
	    			Lists.push(b);
	    		}
	    	}
	    	_this.trumpLists = Lists;
	    	console.log(_this.trumpLists);
	    }
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
}