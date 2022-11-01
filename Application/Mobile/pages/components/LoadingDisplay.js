import { Box, ActivityIndicator } from "@react-native-material/core";


export default LoadingDisplay = () => (
    <Box style={{ position: "absolute", width: "100%", height: "100%", backfaceVisibility: "visible", backgroundColor: "rgba(0, 0, 0, 0.66)" }} >
        <ActivityIndicator style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, alignItems: "center", justifyContent: "center" }} size={'large'} />
    </Box>
) 