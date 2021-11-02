const videoDemo = document.getElementById("video-demo")
const downloadEle = document.getElementById("download-video")
const data = []
var mediaRecroder = null

const captureOptions = {
    video: {
        cursor: "always"
    },
    audio: {
        echoCancellation: false,
        noiseSuppression: false,
        sampleRate: 48000
    }
}

async function startRecord() {
    const captureStream = await navigator.mediaDevices.getDisplayMedia(captureOptions)
    mediaRecroder = new MediaRecorder(captureStream, {audioBitsPerSecond: 128_000, videoBitsPerSecond: 3_200_000, mimeType: "video/webm"})

    mediaRecroder.ondataavailable = e => data.push(e.data)

    mediaRecroder.onstop = () => {
        const blob = new Blob(data, { type: "video/webm" })
        const url = window.URL.createObjectURL(blob);
        downloadEle.href = url
        downloadEle.download = `vCapture-${new Date().getTime().toString(16)}.webm`
        downloadEle.click()
        window.URL.revokeObjectURL(url);
        data.length = 0
    }
    videoDemo.srcObject = captureStream
    mediaRecroder.start()
}

function stopRecord() {
    const vdTracks = videoDemo.srcObject.getVideoTracks() || []
    const adTracks = videoDemo.srcObject.getAudioTracks()
    vdTracks.forEach(track => track.stop())
    adTracks.forEach(track => track.stop())
    videoDemo.srcObject = null;

    mediaRecroder.stop()
}