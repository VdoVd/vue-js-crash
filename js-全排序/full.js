
const dfs=(str,len,cur)=>{
    // console.log('begin',cur)
    if(cur===len){
        console.log(str)
    }
    for(i=cur;i<len;i++){
        temp=str[cur]
        str[cur]=str[i]
        str[i]=temp
        dfs(str,len,cur+1)
        temp=str[cur]
        str[cur]=str[i]
        str[i]=temp
    }
}
dfs('okl',3,0)
//全排序失败
// https://juejin.cn/post/6844903696132734989网站方案

