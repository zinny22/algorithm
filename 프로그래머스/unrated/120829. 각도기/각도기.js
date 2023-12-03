function solution(angle) {
    const 예각 = (0 < angle) && (angle < 90)
    const 직각 = angle === 90;
    const 둔각 = (90 < angle) && (angle < 180);
    const 평각 = angle === 180;
    
    if(예각) return 1;
    if(직각) return 2;
    if(둔각) return 3;
    if(평각) return 4;
    
}