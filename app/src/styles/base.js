import {
    QUICKSAND_FONT,
} from 'app/res/fonts';
import { RFValue } from 'app/src/utils/helper/sizer';
import { APP_COLOR, BACKGROUND_COLOR } from 'app/src/styles/colors';

const styleBase = ({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    justifyCenter: {
        justifyContent: 'center',
    },
    justifyStart: {
        justifyContent: 'flex-start',
    },
    justifyEnd: {
        justifyContent: 'flex-end',
    },
    justifyBetween: {
        justifyContent: 'space-between',
    },
    justifyAround: {
        justifyContent: 'space-around',
    },
    alignCenter: {
        alignItems: 'center',
    },
    alignStart: {
        alignItems: 'flex-start',
    },
    alignEnd: {
        alignItems: 'flex-end',
    },
    selfStart: {
        alignSelf: 'flex-start',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
    },
    wrap: {
        flexWrap: 'wrap',
    },
    divider: {
        height: 1,
        borderColor: '#e5e5e5',
        borderWidth: 1,
    },
    column: {
        flexDirection: 'column',
    },
    nav: {
        height: 60,
        backgroundColor: '#fff',
    },
    fillParent: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    fullParent: {
        height: '100%',
        width: '100%',
    },
    overflowHidden: {
        overflow: 'hidden',
    },
    h75: {
        height: '75%',
    },
    w75: {
        width: '75%',
    },
    h25: {
        height: '25%',
    },
    w25: {
        width: '25%',
    },
    w100: {
        width: '100%',
    },
    h100: {
        height: '100%',
    },
    h50: { height: '50%' },
    w50: { width: '50%' },
    overlay: {
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    textCenter: {
        textAlign: 'center',
    },
    textInput: {
        height: 40,
    },
    input: {
        borderWidth: 1,
        borderColor: '#e5e5e5',
    },
    grow: {
        flexGrow: 1,
    },
    shrink: {
        flexShrink: 1,
    },
    textWrap: {
        width: 0,
        flexGrow: 1,
    },
    rounded: {
        borderRadius: 4,
    },
    rounderNormal: {
        borderRadius: 6,
    },
    moreRoundedButton: {
        borderRadius: 10,
    },
    roundCornerButton: {
        borderRadius: 30,
    },
    textWhite: {
        color: '#fff',
    },
    QuickSandLight: {
        fontFamily: QUICKSAND_FONT.LIGHT,
    },
    QuickSandRegular: {
        fontFamily: QUICKSAND_FONT.REGULAR,
    },
    QuickSandBold: {
        fontFamily: QUICKSAND_FONT.BOLD,
    },
    QuickSanMedium: {
        fontFamily: QUICKSAND_FONT.MEDIUM,
    },
    textUppercase: {
        textTransform: 'uppercase',
    },
    textBlack: {
        color: '#4A4643',
    },
    textGrey: {
        color: '#a2a8b1',
    },
    textGray: {
        color: '#999999',
    },
    text4: {
        color: '#444',
    },
    text6: {
        color: '#666',
    },
    textPrim: {
        color: '#D0CFD0',
    },
    textE5: {
        color: '#e5e5e5',
    },
    textWhiteSmoke: {
        color: '#F6F6F6',
    },
    textDanger: {
        color: '#ff4444',
    },
    textBlue: {
        color: '#3092FF',
    },
    textAppColor: {
        color: APP_COLOR,
    },
    text3: {
        color: '#333333',
    },
    text999: {
        color: '#999999',
    },
    text9: {
        fontSize: RFValue(9),
    },
    text10: {
        fontSize: RFValue(10),
    },
    text11: {
        fontSize: RFValue(11),
    },
    text12: {
        fontSize: RFValue(12),
    },
    text13: {
        fontSize: RFValue(13),
    },
    text14: {
        fontSize: RFValue(14),
    },
    text15: {
        fontSize: RFValue(15),
    },
    text16: {
        fontSize: RFValue(16),
    },
    text17: {
        fontSize: RFValue(17),
    },
    text18: {
        fontSize: RFValue(18),
    },
    text20: {
        fontSize: RFValue(20),
    },
    text21: {
        fontSize: RFValue(21),
    },
    text22: {
        fontSize: RFValue(22),
    },
    text23: {
        fontSize: RFValue(23),
    },
    lineHeight15: {
        lineHeight: RFValue(15),
    },
    lineHeight18: {
        lineHeight: RFValue(18),
    },
    lineHeight20: {
        lineHeight: RFValue(20),
    },
    lineHeight22: {
        lineHeight: RFValue(22),
    },
    lineHeight23: {
        lineHeight: RFValue(23),
    },
    lineHeight24: {
        lineHeight: RFValue(24),
    },
    lineHeight25: {
        lineHeight: RFValue(25),
    },
    fontBold: {
        fontWeight: '600',
    },
    letterSpacer_2: {
        letterSpacing: 2,
    },
    letterSpacer_4: {
        letterSpacing: 4,
    },
    shadowBox: {
        elevation: 2,
        shadowColor: '#e5e5e5',
        shadowOffset: {
            width: 0.5,
            height: 1.5,
        },
        backgroundColor: '#fff',
        shadowOpacity: 0.9,
        shadowRadius: 1.5,
        borderBottomWidth: 0,
        borderRadius: 5,
    },
    shadow: {
        elevation: 2,
        shadowColor: '#999',
        shadowOffset: {
            width: 0.5,
            height: 1.5,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1.5,
        borderBottomWidth: 0,
    },
    colorInput: {
        color: '#55db55',
    },
    panelHeader: {
        height: 40,
        borderWidth: 0,
    },
    roundButton: {
        height: 60,
        width: 60,
        borderRadius: 30,
    },
    card: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#e5e5e5',
        borderBottomWidth: 1,
        borderTopWidth: 1,
    },
    borderTop: {
        borderTopWidth: 1,
    },
    borderBottom: {
        borderBottomWidth: 1,
    },
    borderLeft: {
        borderLeftWidth: 1,
    },
    borderRight: {
        borderRightWidth: 1,
    },
    bordered: {
        borderWidth: 1,
    },
    borderNone: {
        borderWidth: 0,
    },
    borderE5: {
        borderColor: '#e5e5e5',
    },
    borderWhite: {
        borderColor: '#fff',
    },
    borderRadiusNone: {
        borderRadius: 0,
    },
    borderBlue: {
        borderColor: '#3092FF',
    },
    bgE5: {
        backgroundColor: '#e5e5e5',
    },
    bgWhite: {
        backgroundColor: '#fff',
    },
    bgAppColor: {
        backgroundColor: APP_COLOR,
    },
    bg: {
        backgroundColor: BACKGROUND_COLOR,
    },
    separator_newsfeed: {
        backgroundColor: '#c6c6c6',
        height: RFValue(10),
    },
    bgWhiteTransparent: {
        backgroundColor: 'rgba(255,255,255,0.9)',
    },
    bgBlue: {
        backgroundColor: '#3092FF',
    },
    colorBlue: {
        color: '#3092ff',
    },
    bgFacebook: {
        backgroundColor: '#3b5998',
    },
    bgGoogle: {
        backgroundColor: '#dc4e41',
    },
    bgDanger: {
        backgroundColor: '#ff4444',
    },
    bgBlack: {
        backgroundColor: '#000',
    },
    noBg: {
        backgroundColor: 'transparent',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    textDecorationLine: {
        textDecorationLine: 'underline',
    },

    // Margin
    m_5_top: {
        marginTop: RFValue(5),
    },
    m_10_top: {
        marginTop: RFValue(10),
    },
    m_15_top: {
        marginTop: RFValue(15),
    },
    m_20_top: {
        marginTop: RFValue(20),
    },
    m_25_top: {
        marginTop: RFValue(25),
    },
    m_5_bottom: {
        marginBottom: RFValue(5),
    },
    m_10_bottom: {
        marginBottom: RFValue(10),
    },
    m_15_bottom: {
        marginBottom: RFValue(15),
    },
    m_20_bottom: {
        marginBottom: RFValue(20),
    },
    m_25_bottom: {
        marginBottom: RFValue(25),
    },
    m_5_left: {
        marginLeft: RFValue(5),
    },
    m_10_left: {
        marginLeft: RFValue(10),
    },
    m_15_left: {
        marginLeft: RFValue(15),
    },
    m_20_left: {
        marginLeft: RFValue(20),
    },
    m_25_left: {
        marginLeft: RFValue(25),
    },
    m_5_right: {
        marginRight: RFValue(5),
    },
    m_10_right: {
        marginRight: RFValue(10),
    },
    m_15_right: {
        marginRight: RFValue(15),
    },
    m_20_right: {
        marginRight: RFValue(20),
    },
    m_25_right: {
        marginRight: RFValue(25),
    },

    // Padding
    p_5_top: {
        paddingTop: RFValue(5),
    },
    p_10_top: {
        paddingTop: RFValue(10),
    },
    p_15_top: {
        paddingTop: RFValue(15),
    },
    p_20_top: {
        paddingTop: RFValue(20),
    },
    p_25_top: {
        paddingTop: RFValue(25),
    },
    p_5_bottom: {
        paddingBottom: RFValue(5),
    },
    p_10_bottom: {
        paddingBottom: RFValue(10),
    },
    p_15_bottom: {
        paddingBottom: RFValue(15),
    },
    p_20_bottom: {
        paddingBottom: RFValue(20),
    },
    p_25_bottom: {
        paddingBottom: RFValue(25),
    },
    p_5_left: {
        paddingLeft: RFValue(5),
    },
    p_10_left: {
        paddingLeft: RFValue(10),
    },
    p_15_left: {
        paddingLeft: RFValue(15),
    },
    p_20_left: {
        paddingLeft: RFValue(20),
    },
    p_25_left: {
        paddingLeft: RFValue(25),
    },
    p_5_right: {
        paddingRight: RFValue(5),
    },
    p_10_right: {
        paddingRight: RFValue(10),
    },
    p_15_right: {
        paddingRight: RFValue(15),
    },
    p_20_right: {
        paddingRight: RFValue(20),
    },
    p_25_right: {
        paddingRight: RFValue(25),
    },

    // Vertical
    p_5_vertical: {
        paddingVertical: RFValue(5),
    },
    p_10_vertical: {
        paddingVertical: RFValue(10),
    },
    p_15_vertical: {
        paddingVertical: RFValue(15),
    },
    p_20_vertical: {
        paddingVertical: RFValue(20),
    },
    p_25_vertical: {
        paddingVertical: RFValue(25),
    },
    m_5_vertical: {
        marginVertical: RFValue(5),
    },
    m_10_vertical: {
        marginVertical: RFValue(10),
    },
    m_15_vertical: {
        marginVertical: RFValue(15),
    },
    m_20_vertical: {
        marginVertical: RFValue(20),
    },
    m_25_vertical: {
        marginVertical: RFValue(25),
    },

    //Horizontal

    p_5_horizontal: {
        paddingHorizontal: RFValue(5),
    },
    p_10_horizontal: {
        paddingHorizontal: RFValue(10),
    },
    p_15_horizontal: {
        paddingHorizontal: RFValue(15),
    },
    p_20_horizontal: {
        paddingHorizontal: RFValue(20),
    },
    p_25_horizontal: {
        paddingHorizontal: RFValue(25),
    },
    m_5_horizontal: {
        marginHorizontal: RFValue(5),
    },
    m_10_horizontal: {
        marginHorizontal: RFValue(10),
    },
    m_15_horizontal: {
        marginHorizontal: RFValue(15),
    },
    m_20_horizontal: {
        marginHorizontal: RFValue(20),
    },
    m_25_horizontal: {
        marginHorizontal: RFValue(25),
    },

    /* Gutters */
    p_sm_top: {
        paddingTop: 5,
    },
    p_sm_left: {
        paddingLeft: 5,
    },
    p_sm_right: {
        paddingRight: 5,
    },
    p_sm_bottom: {
        paddingBottom: 5,
    },
    p_sm_vertical: {
        paddingVertical: 5,
    },
    p_sm_horizontal: {
        paddingHorizontal: 5,
    },
    m_sm_top: {
        marginTop: 5,
    },
    m_sm_left: {
        marginLeft: 5,
    },
    m_sm_right: {
        marginRight: 5,
    },
    m_sm_bottom: {
        marginBottom: 5,
    },
    m_sm_vertical: {
        marginVertical: 5,
    },
    m_sm_horizontal: {
        marginHorizontal: 5,
    },
    // Padding md
    p_md_top: {
        paddingTop: 15,
    },
    p_md_left: {
        paddingLeft: 15,
    },
    p_md_right: {
        paddingRight: 15,
    },
    p_md_bottom: {
        paddingBottom: 15,
    },
    p_md_vertical: {
        paddingVertical: 15,
    },
    p_md_horizontal: {
        paddingHorizontal: 15,
    },
    // Gutter md
    m_md_top: {
        marginTop: 15,
    },
    m_md_left: {
        marginLeft: 15,
    },
    m_md_right: {
        marginRight: 15,
    },
    m_md_bottom: {
        marginBottom: 15,
    },
    m_md_vertical: {
        marginVertical: 15,
    },
    m_md_horizontal: {
        marginHorizontal: 15,
    },

    // Gutter x-md
    m_x_md_top: {
        marginTop: 20,
    },
    m_x_md_left: {
        marginLeft: 20,
    },
    m_x_md_right: {
        marginRight: 20,
    },
    m_x_md_bottom: {
        marginBottom: 20,
    },
    m_x_md_vertical: {
        marginVertical: 20,
    },
    m_x_md_horizontal: {
        marginHorizontal: 20,
    },

    // Gutter LG
    m_lg_top: {
        marginTop: 30,
    },
    p_lg_top: {
        paddingTop: 30,
    },
    m_lg_bottom: {
        marginBottom: 30,
    },
    p_lg_bottom: {
        paddingBottom: 30,
    },
    p_lg_right: {
        paddingRight: 30,
    },
    m_lg_right: {
        marginRight: 30,
    },
    p_lg_vertical: {
        paddingVertical: 30,
    },
    m_lg_vertical: {
        marginVertical: 30,
    },
    p_lg_horizontal: {
        paddingHorizontal: 30,
    },
    m_lg_horizontal: {
        marginHorizontal: 30,
    },

    //Gutter XL
    m_xl_top: {
        marginTop: 45,
    },
    m_xl_bottom: {
        marginBottom: 45,
    },
    m_xl_horizontal: {
        marginHorizontal: 45,
    },
    m_xl_vertical: {
        marginVertical: 45,
    },
    p_xl_top: {
        paddingTop: 45,
    },
    p_xl_bottom: {
        paddingBottom: 45,
    },
    p_xl_horizontal: {
        paddingHorizontal: 45,
    },
    p_xl_vertical: {
        paddingVertical: 45,
    },
    //Gutter SX
    m_sx_top: {
        marginTop: 10,
    },
    m_sx_bottom: {
        marginBottom: 10,
    },
    m_sx_right: {
        marginRight: 10,
    },
    m_sx_left: {
        marginLeft: 10,
    },
    m_sx_vertical: {
        marginVertical: 10,
    },
    m_sx_horizontal: {
        marginHorizontal: 10,
    },
    p_sx_left: {
        paddingLeft: 10,
    },
    p_sx_right: {
        paddingRight: 10,
    },
    p_sx_top: {
        paddingTop: 10,
    },
    p_sx_bottom: {
        paddingBottom: 10,
    },
    p_sx_horizontal: {
        paddingHorizontal: 10,
    },
    p_sx_vertical: {
        paddingVertical: 10,
    },
    image20: {
        width: RFValue(20),
        height: RFValue(20),
        borderRadius: RFValue(10),
        overflow: 'hidden',
    },
    image30: {
        width: RFValue(30),
        height: RFValue(30),
        borderRadius: RFValue(15),
        overflow: 'hidden',
    },
    image40: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
        overflow: 'hidden',
    },
    image50: {
        width: RFValue(50),
        height: RFValue(50),
        borderRadius: RFValue(25),
        overflow: 'hidden',
    },
    image60: {
        width: RFValue(60),
        height: RFValue(60),
        borderRadius: RFValue(30),
        overflow: 'hidden',
    },
    image80: {
        width: RFValue(80),
        height: RFValue(80),
        borderRadius: RFValue(40),
        overflow: 'hidden',
    },
    image100: {
        width: RFValue(100),
        height: RFValue(100),
        borderRadius: RFValue(50),
        overflow: 'hidden',
    },
});

export default styleBase;
