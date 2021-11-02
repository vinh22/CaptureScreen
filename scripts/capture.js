const videoDemo = document.getElementById("video-demo")
const downloadEle = document.getElementById("download-video")
const data = []
var mediaRecroder = null

videoDemo.height = videoDemo.clientWidth * window.screen.height / window.screen.width
window.onresize = () => {
    videoDemo.height = videoDemo.clientWidth * window.screen.height / window.screen.width
}

const captureOptions = {
    video: {
        cursor: "always"
    },
    audio: true
}

async function startRecord() {
    const captureStream = await navigator.mediaDevices.getDisplayMedia(captureOptions)
    mediaRecroder = new MediaRecorder(captureStream, {audioBitsPerSecond: 256000}) //{audioBitsPerSecond: 256000, videoBitsPerSecond: 2500000}

    mediaRecroder.ondataavailable = e => data.push(e.data)

    mediaRecroder.onstop = () => {
        const blob = new Blob(data, { type: "video/mp4" })

        const url = window.URL.createObjectURL(blob);
        downloadEle.href = url
        downloadEle.download = "record.mp4"
        downloadEle.click()
        window.URL.revokeObjectURL(url);
    }
    videoDemo.srcObject = captureStream
    mediaRecroder.start()
}

function stopRecord() {
    const tracks = videoDemo.srcObject.getVideoTracks()
    tracks.forEach(track => track.stop());
    videoDemo.srcObject = null;

    mediaRecroder.stop()
}