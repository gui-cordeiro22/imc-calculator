// TODO: Atualizar a tipagem do parâmetro route que anteriormente utilizava NextRoute

export const isButtonActive = (navigationSource: string, route: any) => {
    if (navigationSource === route.asPath) {
        return true;
    } else {
        return false;
    }
};
