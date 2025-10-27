function solution(phone_book) {
    phone_book.sort();
    
    for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i+1].startsWith(phone_book[i])) {
        return false; // 접두어 발견 시 바로 종료
    }
}

    
    return true;
}