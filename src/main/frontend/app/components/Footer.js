import React, { Component } from 'react'
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
           <footer>
               <div className="footerSection">
                   <div>
                       <h4>About</h4>
                       <a href="#">About BnB</a>
                       <a href="#">Careers</a>
                       <a href="#">Press</a>
                       <a href="#">Content Guidelines</a>
                       <a href="#">Terms of Service</a>
                       <a href="#">Privacy Policy</a>
                       <a href="#">Ad Choices</a>
                   </div>

                   <div>
                       <h4>Discover</h4>
                       <a href="#">Bnb Project Cost guides</a>
                       <a href="#">Collections</a>
                       <a href="#">Talk</a>
                       <a href="#">Events</a>
                       <a href="#">Bnb Mobile</a>
                       <a href="#">Developers</a>
                   </div>

                   <div>
                       <h4>BnB for business Owners</h4>
                       <a href="#">Claim your business Page</a>
                       <a href="#">advertise on Bnb</a>
                       <a href="#">Bnb WiFi</a>
                       <a href="#">Business Support</a>
                       <a href="#">BnB blog for Business Owners</a>
                       <a href="#">BnB Reservations</a>
                   </div>
               </div>
<div className="footer-image">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABjFBMVEX///8dHR//tlX/eVZ8zJK26JIAAAD/vFcAABrw8PAZFxz/uFYPFh0aGx/0r1JwVDC775b/P2IJEx04QzITDRkWFhhielF/0pb/fVlISEkWChYPARZXQistPjNWiGR5mWQADBwTFx62hEImIiBCZExacExdNSwZExpdXV6l4JKz2PSHYzYQEBPfoE256ZL/iVXB66QyMjMAFxxFNyfU8cD/W13/0pz/w3i2trZra2z/bFmw5okYAABIISkNAwBXw//JycqEzfpwPDEZDABaJC6cvNR/mKtAgadHk76Mp71PqdsBHBzSZkqufkCdTjv/skhILCfKkUeVlZaFRTYlLio/Xki2WkL/6dHg9dGacDplonaN0p7s+eM7MCXE58nX19dVZHA5OTr/n6qCgoP/bkWmpqb/qlVus4FPfV0zXXc3UD9ezv/DX0Y3JiSHqm3/yYf/27JjSy0hLDTSN1SULUBwhZZRY0SKQS9sfm+RuHZIMzed0veKWV+HKzz/6c//z5S0ckHJNlErSFpFUFm+OkasAAARZUlEQVR4nO2d/UPbNhrHcULzgnFgKSEh4SUvdKFL0g64lbJ1LRvb3baWQqAvCztKuRyjrytsvW29u663u3/89GpLsmLLSZwX5ucnFGxZH3/9SI9kSR4Z8WbrVa2/Vl33WGKvFhAGhAHhwBCWoU312HpKuAjt0nRvrYeExr00tMuTvbV7Y70kHAV2+ULH9ieJMb9zfw4l4Sd/lVziE+t37s+AMCAMCAPCgFBuH0qM+Z37s8eE57zF17Q5aBd7bD2NS8f6YT0l7J/5TRiP9BlQ0yJxXwmb/ZYQiNj0E5BKaCAjlyyoGznb8xnkGviKvorYxIQv30eGLzg+q24lBFjycMY4vic4cYCuGPFRRCJh8k4G2p0VdPFPQ1Flm4WaFGbVT4iuIhXzNZSoxfwWEUs4/n4mDCyzhwiT/4mGVA2XFxCav2yH1l5dOz3dbnWGvpVHF6mgU/Ad8lHEeMTAEoaRIUAtltDbJ9x+iDJ+2JowgWQzkiF4Fd1vETkJww8Q4fiEuoQtCUdaEoaiE8gT88VeiGh6IQLM7CBBYzV1CSWEv7kR6nUkGznHZxF5CUk9c+AAqIPKQdeZA+yEpzjrNYdMDtg7SUXc9QNQkBDXM/mt1oR67ayxVa85avgO5/2qNWG0geuaBhax7qOIu4jQIBKGVwy3eiZajCXz+RjzHNvr0jWc9zWHx5TUNQWci48i8hKGX+B65syhnok2ksJNsBPqOPPWzQU46Qwxxeq6zyLyEmbeH2cu26JoqBo0tJADYQhn3rq5MJnozfRNREHCDK5nSk4VKeYxVqPCL1yLT3J3IAzpJeIQLHD3RSQS7hAJ764w7t+yZIjnzJHQtUE0n/Z8Q2cy6bqIooQae1tbACZWS/lYPlZxJCQNotOzQBpBo4RP80lEXkLSGHIOJSlZNJSo1bcYV5UQujeIputRp/dHREHCz3Fj6FTPYEjducUPhUCD+PC303eOGelF1CTSANEUsZuAgoSknjFCHiK2FoRARmAu9yk0Dp3CyJN2J0r6id0UEY9dJF+EuXqm4hx045iNvQlSQpU7U0myARQR0ah2D1CU8KVK0B2tzFYa9VrC+SlVMlrXHETZfLopYoSTMHwH3dHCqouEB0kYtB0wR8kI4UOqv3rnjBhdNWAnMVfjROyeJ4oSkqC76EIYY6uHVoTbp7hFdHZF0NUfj5Ua5vNAPfG4S4TYC1eohDjoNvJcPaNDp+MKhSNmLiiQEuJr8A+8DrPjMzur60w4S0RMdQfwmJeQdO75ekZPHDTqCRaS+A6ntIzwGr4I0yACvES9cZDgETniLotYNTgJpZ17HfSUYslZ6zmCt9nQhNhc5oev8EWs/pOeaMyCvGJF/pEIcUZF7Ep1SiR8SSWknXvOC1F9bhQYbL0+ewA6h1xgFz2IQeOqKNJDtPpPQHw49OvSFnVTxBTvhfLOPR5r4PoaOniuEvUiS6jXsHGn4qv8ZlU1UdSXcBwfQd1rVC6tc0BRwrAh6dyTakUceNNDuliDCHEc7D+BqO3aK8YPyfCayzBl90QUJKSde56FRI5uDYjUtsWwLUoyc456qYgdV6eihPLOPQmr2NoHDrRFBb3UjNTCbkGh3iURNUFCHM+InXviOsyv4LldrTSKddURcVZFnTiiS0SBpU516Ik2L7zzMgkafKFzL3FDWCOOJ/NCnS+H295ee3fq2RHJbdUi1zuTELeFD8KmZe7sGXmhc6/XbW5IPFNhSHwN99WZAcXoloojUk/sTEQqYZi1q3pRcBGZG9qGEluZfUBR0RHpEFVHIlIJMyzh97ouXFpfRY6jsQEa6dIpuCG+FDugqKPrGi6dF/qcdCLiddxtKmV4CW1XkrSG0dkkaDhdmm1k23ZCRUcMRbVORSylpBLaCO1uCDQ8Wx2PxRQ6u5IBRUVHNEVc7kxC0QvtZZa4IR7DSNQU3r3RAUW25KqO2KknamoSkgBKMgCu1OCDPvBvp+/W+DBXqUU0X4K364mKXgjcMG9zQy8mGWyjb35da2K9I09cVpSQuuFWm4Sygis6oiliW55IJXTzQrkbdkio6IideaKqhHggTDPGuychyDOp1CJ2JCKRUBPCGck15H3DDgkVW0TQBW3bEyUSZsLfiyNqIcYN+doQ9PDtx7YoJYiRdH6kqaUjolE4thTRdkUUJcxkMi9+2cnPwhE1vuR2NwQlqBUrpeTZVk13owQl1mtbZ8lSpZhgRhCljgjpEvXGbGyVKYWuG+2JyEqYyYTv3N1ZWQHdpkIyBilDDCVtDSmdngB0sTwI2sbzsQKgbKkl1A7QFWL5ccMAPS1ISbQkD5/liJAuVG+s5mPJAiqFSdmmiCSc0Vg6aiYlatCZ1hDe4mLlANLRYyGlNrEFJ94JIzZwIt7WhAbpzIMB5QHRMnpmtYg6vBVAO0RnHWze67Y8kUh4V6SzU0bNoJRqJx4LKZMTUEtCCeUAdEmWjqVETyzpX9ajEjqmFOCJreGOWurIu4TgejI6Jv/kbKOG3bAwcSCjYylLSEsdaVeS0bGUB3iOSbJSQ+PDdjqmFOSfkQ0PhEcpeXZjYlkgJbmSrcBiHkRLqXa26xmk2JDO9WDyswcRNyTz1Y1yLpebiUQiKjO9U9VIRDsCB0so7XTguCMNZNyi5JyBjCNz2Vy2LHkCPIgoSmiUs9nyzwtvPvl25PB4yYUS0i03r8dHRuIbuzMSSpFuZncDHny9uexCCemWjg9HHo2ezD8DRRoTKNVF5CWEdM/mT65MTl4AhNBaU0K6EqKjBihlWvJ05sHXm6UWlJQO2qPR0XQaUU7lOC2VRZyhlzCqkWwW0MEMr8ClZt+axxBKJn9LO9EkWtrpGEpBS4OlI4TQ0unLbxZ+nmJKkZpRA8QSwnxTS8eIDppASChTOP/WdFauJiWhcziWocSlOOT+TQhHR+HSsgtvcCm8iAi8EN61dZTvdzS3KxdAdt/aDj48Xo+40tGCY0q5dnJKUgreHqXJXUfLAz80S1FV9MQNUA1ad80inLwIH4bUkv2MQy/zr+wFbm1xycFLUFljLs0RooyPl0CFvKGQbZO7ayxhGcS4VQlhT22pqhnGmIQQ2uGx9znuLCFa4DgAhCDyMAmvTH7ofk5r2zg83N/fPxlcwiuX37x5c7ix0W5mceC92dzN+fTAEk4uRHKguWh7IiaeVFp+cgJtQAlzqJHojBAGNdns3OQ5JoQ29iwg7JVRQtjon2NC4978/Pz+eSbUDFA13E+f45oGFatrhOXFfWjnmDA7jzbBGKj2sOuEAxfT/AEIx7LZm898JoyXlp2s5MsqzxGzPRw9Oelae9iKMJJyMn/WsY74EtO0JNScLCBs24aHMB6pejJK0XPCVJUfwAVlUSV0vEP2W9YnwtTM+voSg7i8vr5+vgiru/E48xIgNROPx1PDSAiiNjEuJRouHR8z+w6ljo53d4eRML0IX4CgtwM2P+Rf0cARe80T4eYmcGXqy6nWKb8Js3TTpC7Wpei4/z59+vTx48f/Qxgph5TvGtKSd5lw8y/Pnz//4IMPvkSpG189f/4ZSH19E6W+wak/3+wP4aEzoeu2apTw1q1bDOGtWywhTvWL0HB5J+220mPQCHPlqSmuptklEt4GxrwmZZIuS1gHjHD+/v1Ll+4ZDCEGNG6//umn31+umIBvQfILnHTxxMEitLeHdPLpe9DCeC0UAPwdJfFidpe3lQNGaItpcCt/+ydI9FGGbPt1+zUCzpBVps7XHXRCPJaAJfyY7iJBgMMZvFI44vi6t2PCdNpXQjRdw/iCEuLn8vZ7mJAspHV+49wpYXr+yZOFhZ/L55hwLpedyuFW7JwSPrMm2QWEAaG/hM8Zwk1PfjjohDgq2nyKCTEF5f2HmYKEj1HLRINAtqbJDXRNQyZagy4SZMIJbRM/sySo/xGlsLzm4i1+Ps3C1AAT0sGPr2599uUR+Tv14ze3/vXlcopJfY3/NvdH7lVM0wVC2sG8sZliJmbe2KzeNFOpG6nqTeJqNEAaIkLrPZmCWa+8hokw7jg/mrOUxTBMhOA5ZREjQooDtIL4LhNGquWyRZibqlYjhDBSXbl92yJMroCkRQiS4FA3wpHDZcphRCLXD6sRi29jw2KMLDO9lKVItVrOmoRTU1PVDua1NZvNxSeL+2Ru4sL09K/NJh5+2W3u/vv129eEMPxib2/v7du3JuHe3i+7zabCZNldAlhtxq2Upu2iq1NNuRGf42bz18XFJ4TwzfT0NChlJ1sofkcmHNtnQf/tPWIfo8VfH9PkRyj5d8X8sSfQNUu4fqXi44EEezeTnQU92dn80hFunrcwk50jDIc5wnDYV0JaJtsc4XYsIDwHhGli6Fs2ckL0HQGLECU7IiRM+LWdvaJ8RMuEPuXjlTB+NMPZHDX0LRv2P//8lNgOtk/59Iyi4Zcw5KpHspTtFL5MF/l/HrnVq+IkEuFjNsx/rKWf3Pc8aNJxLgpjpE1XSCmUCU5zcSfUhtsCwj8OoTE+fKb4nR1MaOx8ztnEMNiswtsSk3DlQYa1qx4+fdM/wzsPqBLeddt2Z/BMDwgDwoG3gDAgHHwLCAVCfoevq1F98M1rix9mQprw1cQwGN6IRzXyXkmylo8NgyU99S2G1wLCgHDwTYGQMXwOWiWbzeVwH9pYoUbSedMK4g+W4WPHSE5j3IH4KgXzWLK1VlKWD83JIDmRmb1soV3f0ly3DO91XV7cnwf2ww9zaBe8nQfUdvA+sUXT0AZkRqkoMbQH59gzkhOaCmMeiG5M4cw8Fm+PlmzI8ikW8Uab91BOCz9cwvPajplSuwHan1iySpbMLzW/f0h22DdWrU42KppR0nV7/xsRlhdRThcmL02hA9F/dLyRZ7JiHkv3Opf35NFtROvx0/6ssJQQ0rCJEsoiKkoIc7II8T8pIT3WcTd3/IUyP99y94Nwm/lAxLkkTFxDtnZ+CblvlQaEAWFA6ImQdk3PLaFeayCDJT2vhDHYe0ZfFeqIUF9Dxn7T2c/5pZ4I4en5jgk5MwnTczezU1MI8LwS+jWT3ZEQD5d4JNTxKIvXqK0fhPCTJNB4QuSHUSkh2fsan2XuoG+P2k5h0HYqRG2+zdV3IBS+G6dc0/Cnqdal/dDQZngYE5XaiVAwVcK5rD+rEbwQWto4PaVtEo7uM338fhEype6+hmin5B63+Lai4mEH16itXcLexzRiSVWjtiEmVKxL3QhDraO2vhMqtfjuhKwFhMNJ2IOxtv1INhuZQjEER2gYxrgTIZxJ24Yf4vNcorYuE6J8NJGwBK3l9/8AIZwx2AahAfMt9LQulRKGyXy+FoChdqM2th3tN6Hr97TMqM0ToWgDTMiwDjzhTfP9oRfC9qK2vhCewHd1C2h/Gg+EtQoM2io1lx7wQBCOyt4fuhG2G7X1h1DW4tsJbX18tRZf6OMPMKF8nCbvdZxGhdCYO4Ffpeg1IRlry3vUUBxrUyHUjFyuezuWeyAUx0vVojZhvFSJUPNvL2hPhAVgw0GYbodQOWrrO+HY3H24croNQsWore+E2hjw6bYILeuM8CGyVyGGENY0XduxHN2tDgkdYxo3QkkP2Jjb72Jr0Q3CjjTkL+JDix8QngfCUp/90G/CtttD1VF9V0J2VKPXkTfXLbDFNGdwZeeZa/9QfMst9jVIPvgT3b0m5LoF9qjNHGvzQEh7KNY7YZJPsQ+E0RruFmy1IoSne52poNdxpnVdyKdPhOja3SVkTgsIA8KAMCAMCAPCQSLk18xYu2UkyLWFNTMkSYvqvGYmKq6ZYU+T/ODDmpmxZ4vQpqfxe4uXe6ZVJtBu84WzCrZVvOqKpCoTBfTfCfg3+ocxR3K6yB2I3/ismqfxmYo/HOB1TyinS9N4clvH4zRlaOTbCMzatfEk2U6/QBbTkq2i6NraAvNf/KfB5UQPJP+jpwmZij8YXE549l7H/cOBt4AwIBx8+4MT/h+R7R5LtvAN0gAAAABJRU5ErkJggg=="></img>
</div>
               <p>Copyright &Copy; 2019 Bnb Inc. BnB and related marks are registered trademarks of BnB</p>
           </footer>


        )
    }
}