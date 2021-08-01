import Toast from 'react-native-root-toast';


export default function toast (message, time=Toast.durations.LONG, position= Toast.positions.CENTER){
    return Toast.show(message, {
        duration: time,
        position,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        opacity: 0.8,
        onShow: () => {
            // calls on toast\`s appear animation start
        },
        onShown: () => {
            // calls on toast\`s appear animation end.
        },
        onHide: () => {
            // calls on toast\`s hide animation start.
        },
        onHidden: () => {
            // calls on toast\`s hide animation end.
        }
    });
}
