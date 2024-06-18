import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../constants/index';

const styles = StyleSheet.create({
    welcomeTxt:(color, top) => ({
        fontFamily: "bold",
        fontSize: SIZES.xxLarge - 10,
        marginTop: top,
        color: color,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        marginHorizontal: SIZES.small,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        marginRight: SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        fontWeight: "100",
        height: "100%",
        width: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium
    }
})

export default styles