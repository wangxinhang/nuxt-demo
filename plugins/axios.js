export default({store, route, redirect, $axios}) => {

    $axios.onRequest(config => {
        // console.log("请求拦截器")
		if (process.client) {
			// 用户端
		}

    	if (process.server) {
    		// 服务端
        }
        return config
    })

    $axios.onResponse(response => {
        // console.log('响应拦截器：', response)
        return response
    })

    $axios.onError(error => {
        // console.log('响应异常')
        const code = parseInt(error.response && error.response.status)      
    	// switch (code) 分情况处理
    })

}
