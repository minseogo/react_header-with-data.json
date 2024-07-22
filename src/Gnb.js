import React from 'react';
import cafenavi from './json/cafe.json';

function Gnb() {
    // 상위 메뉴 필터링
    const d1navi = cafenavi.filter((item) => item.prnum === "");

    // 소메뉴 수집
    const submenus = {}; // 소메뉴를 상위 메뉴의 prnum 값에 따라 그룹화하기 위해 빈 객체 생성 / 각 prnum 값을 키로 하여 소메뉴 배열을 저장하기 위해 사용
    for (let item of cafenavi) { // cafenavi 배열의 각 항목을 순회 / 모든 메뉴 항목을 하나씩 처리하기 위해 사용 / of를 사용한 이유는 object이기때문 (값), in을 사용하면 index (키 혹은 인덱스) 를 반환한다.
        if (item.prnum) { // prnum 값이 있는 항목을 처리 (소메뉴) / prnum 값이 있는 항목만 소메뉴로 간주하기 위해 사용
            if (!submenus[item.prnum]) { // prnum 값을 키로 가지는 배열이 존재하지 않는 경우 조건문 실행 / prnum 값에 해당하는 키가 아직 생성되지 않은 경우 빈 배열을 생성하기 위해 사용
                submenus[item.prnum] = []; // prnum 값에 해당하는 키가 없으면 빈 배열을 생성 / 소메뉴를 저장할 배열이 필요하기 때문에 사용
            }
            submenus[item.prnum].push(item); // prnum 값에 해당하는 키에 소메뉴 항목 추가 / 같은 상위 메뉴를 가진 소메뉴를 그룹화하기 위해 사용.
        }
    }

    return (
        <ul className='d-flex'>
            {
                d1navi.map((v, i) => {
                    return (
                        <li className='px-3' key={`gnbnavi${i}`}>
                            {v.gnbnm}
                            <ul>
                                {
                                    // 소메뉴 매핑
                                    submenus[v.cateno] && submenus[v.cateno].map((vv, ii) => (
                                        <li key={`submenu${ii}`}>{vv.gnbnm}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Gnb;
