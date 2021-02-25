# "Song of Pi (10238 Digits Ver.)" Overlay

["Song of Pi (10238 Digits Ver.)"](https://beatsaver.com/beatmap/60a)の現在と残り桁数と数字をオーバーレイ表示します。

![preview](https://rynan4818.github.io/song-of-pi-overlay.png)

[Beat Saber HTTP Status](https://github.com/opl-/beatsaber-http-status)または、[Beat Saber HTTP Status (デンパ時計さんVer)](https://github.com/denpadokei/beatsaber-http-status)を使用して、下記URLをOBSのブラウザソースに設定して使用可能です。

**※Beat Saber HTTP Statusを今回始めて入れる方はModAssistantにあるので、それを入れるのが間違いなく簡単です。**

![preview](https://rynan4818.github.io/song-of-pi-overlay_obs.png)

## 720p(1280x720)用
```
https://rynan4818.github.io/song-of-pi-overlay/
```
## 1080p(1920x1080)用 (上記の1.5倍スケール)
```
https://rynan4818.github.io/song-of-pi-overlay/?modifiers=scale
```

使用可能なmodifiersオプションは以下の3種類です。

- rtl (右寄せ)
```
https://rynan4818.github.io/song-of-pi-overlay/?modifiers=rtl
```
- top (上寄せで、現在の数字と桁数の並びを入れ替え)
```
https://rynan4818.github.io/song-of-pi-overlay/?modifiers=top
```
- scale (1080p用[1.5倍])

上記オプションは,(カンマ)で区切って複数指定可能です。
- 右上寄せ1080p用
```
https://rynan4818.github.io/song-of-pi-overlay/?modifiers=rtl,top,scale
```

プレイしないと表示されないので、NoFailモードでプレイを流しながら、OBSの画面配置調整をして下さい。

曲名が "Song of Pi (10238 Digits Ver.)" の譜面のみ機能します。(短い方のSong of Piは非対応です)
それ以外の譜面では何も表示されません。
