import React from 'react'
import godo from './json/godo.json'

function Godomall() {
    const diinfo = godo.filter((item)=> item["prnum"].split("|").length === 1)

    return (
        <div>
            {
                // godo[6]["prnum"].split("|")[1] // filter 에 대입한 같은 식이다
                diinfo && diinfo.map((v, i)=>{
                    return(
                        <li key={`gnbli${i}`}>{v.gnbnm}
                        <ul>
                            {
                                // 소메뉴 가져오기
                                godo.filter((item)=> item["prnum"].split("|").length > 1 && item["prnum"].split("|")[0] === v.prnum ).map((vv, ii)=> {
                                    // 해석 : length 가 1보다 큰것, 즉 "0|0" 은 길이가 2 이기때문에 참이고 "0" 은 길이가 1 즉 대메뉴이기때문에 가져오지않는다.
                                    // && 연산자 사용하여 [0] === v.prnum 즉 v.prnum 과 일치하면 가져오라

                                    return(
                                        <li key ={`gnbli${ii}`}>{vv.gnbnm}</li> // `gnbli${ii}` 을 사용하는 이유는 ii 인덱스 즉 숫자가 부여되어 li를 고유하게 식별가능하다 즉 gnbli0, gnbli1, gnbli2 이런식으로 번호 부여
                                        // 위의 식 v.prnum 일치하면 {vv.gnbnm} 를 뱉어내라 (return)
                                    )
                                })
                            }
                            </ul>
                        </li>
                    )
                })
                
            }
        </div>
    )
}

export default Godomall
