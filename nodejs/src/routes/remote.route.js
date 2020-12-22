import express from 'express'
import { isAuth } from '../middleware/auth.middleware'
import remoteCtrl from '../controllers/remote.controllers'
const router = express.Router()

router.use(isAuth)

router.post("/", async (req, res) => {
    let cmdString = req.body.cmdString.toString()
    let cmdResult = await remoteCtrl.runCmdString(cmdString)
    // let getDockerImages = await remoteCtrl.getDockerImages();
    let result = cmdResult.data.split('\n'),
        titleList = result[0].split(/(\s{2,})/).filter(item => !/(\s{2,})/.exec(item))
    result.pop()
    result.shift()
    let data = result.map(element => element.split(/(\s{2,})/).filter(item => !/(\s{2,})/.exec(item))),
        imageList = []
    data.forEach(item => {
        let image = {}
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            image[titleList[index]] = element
        }
        imageList.push(image)
    });
    res.json(imageList)
});

router.post("/cmd", async (req, res) => {
    let cmdString = req.body.cmdString.toString(),
        ram = req.body.ram,
        containerName = req.body.containerName
    let string = `${cmdString} ${ram}:${containerName}`
    console.log(string);
    let cmdResult = await remoteCtrl.runCmdString(string)
    res.send(cmdResult.data)
})


export default router