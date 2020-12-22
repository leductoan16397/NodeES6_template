import cmd from 'node-cmd'

const remote = {}

remote.getDockerImages = async () => {
    const syncData = cmd.runSync('docker images');
    return syncData
}
remote.runCmdString = async (cmdString) => {
    const syncData = cmd.runSync(cmdString);
    return syncData
}
export default remote