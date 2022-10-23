var arr=new Array()
    arr[0]="./img/img1.jpg";
    arr[1]="./img/img2.jpg";
    arr[2]="./img/img3.jpg";
    var i=0;
    var ary=new Array()
    ary[0]="描述1";
    ary[1]="描述2";
    ary[2]="描述3";
    var arq=new Array()
    arq[0]="./sp.mp4";
    arq[1]='./sp1.mp4';
    arq[2]='./sp.mp4';
    
    function change(){
        var img=document.getElementById('im');
        var des=document.getElementById('des');
        var he=document.getElementById('herf');
         he.href=arq[i];
         img.src=arr[i];
         des.innerText=ary[i];
        i++; 
        if(i>2){
            i=0;
        }
    };
    setInterval(function(){
        change();
    },2000);
    let arz = ['视频1','视频2','视频3','视频4'];
    let input = document.getElementById('search-item');
    let list = document.getElementById('list')
    input.onkeyup = function () {
        let str = ''
        arz.forEach((item)=>{
        	let res = item.indexOf(input.value)
            if (res != -1){
        		str +='<p>'+item+'</p>'
            }
            console.log(str)
        })
        if (!input.value || !str){
        	list.innerHTML = '<p>暂无结果</p>'
        }else{
			list.innerHTML = str;
            
        }
	};
	input.onblur = function () {
        list.style.display = 'none'
        input.value = ''
        location.reload()
	}
    
