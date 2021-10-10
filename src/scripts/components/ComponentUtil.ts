namespace ComponentUtil {
    export const checkComponent = (id: string) => {
        const component = document.getElementById(id);
        return component ?? null;
    }
}

export default ComponentUtil;