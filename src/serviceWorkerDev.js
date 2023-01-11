const serviceWorkerDev = () => {
    const serviceUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;
    navigator.serviceWorker.register(serviceUrl).then(response=> {
        console.log('response', response);
    })
}
export default serviceWorkerDev;