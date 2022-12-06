/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl, FlatList } from 'react-native';
import { AnimatedFAB, Button, Snackbar, Title, Menu } from 'react-native-paper';
import PostPreview from '../post/PostPreview';
import { BACKEND_URL } from '@env'
import { handleGetUserData } from '../userAPI';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

// Header after the top navigation bar
const HomeTitle = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState({ icon: 'sort-clock-ascending', label: 'New Posts' });
    const closeMenu = () => setMenuVisible(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    const switchToPopularPosts = () => {
        setMenuAnchor({ icon: 'fire', label: 'Popular Posts' });
        closeMenu();
    }

    const switchToOldPosts = () => {
        setMenuAnchor({ icon: 'sort-clock-descending', label: 'Old Posts' });
        closeMenu();
    }

    const switchToNewPosts = () => {
        setMenuAnchor({ icon: 'sort-clock-ascending', label: 'New Posts' });
        closeMenu();
    }

    return (
        <View style={styles.homeTitle}>
            <Menu visible={menuVisible} onDismiss={closeMenu} anchor={<Button icon={menuAnchor.icon} onPress={toggleMenu}>{menuAnchor.label}</Button>}>
                <Menu.Item icon='fire' onPress={switchToPopularPosts} title='Popular Posts' />
                <Menu.Item icon='sort-clock-ascending-outline' onPress={switchToNewPosts} title='New Posts' />
                <Menu.Item icon='sort-clock-descending-outline' onPress={switchToOldPosts} title='Old Posts' />
            </Menu>
        </View>
    );
}

const getAllPosts = async () => {
    try {
        const response = await fetch(BACKEND_URL + '/contmgr/allposts/');
        const json = await response.json();
        return json.posts
    } catch (error) {
        console.error(error);
    }
}

// The home feed
const HomeFeed = (props) => {
    const [allPosts, setAllPosts] = useState([]);
    const [userName, setUserName] = useState(null);

    const handleAllPosts = () => {
        getAllPosts().then((response) => {
            setAllPosts(response)
        })
    }

    // Refresh
    const [refreshing, setRefreshing] = useState(false);
    

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        handleAllPosts()
        setRefreshing(false);
    }, []);

    const [isExtended, setIsExtended] = useState(true);

    // Snackbar
    const [snackbarVisible, setSnackbarVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const onDismissSnackBar = () => setSnackbarVisible(false);
    const openSnackBar = (message) => {
        setSnackbarMessage(message);
        setSnackbarVisible(true);
    }

    // Animation on FAB
    const handleOnScroll = ({ nativeEvent }) => {
        const currentScrollPosition =
            Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

        setIsExtended(currentScrollPosition <= 0);
    };

    const fabStyle = { [props.animateFrom]: 16 };

    useEffect(() => {
        handleGetUserData().then((response) => {
            setUserName(response.username)
        })
    }, [])

    useEffect(() => {
        handleAllPosts()
    }, [userName])

    return (
        <View style={{height: '100%'}}>
            {/* Home feed */}
            <FlatList
                data={allPosts}
                renderItem={({item}) => <PostPreview {...item} navigation={props.navigation} openSnackBar={openSnackBar} userName={userName}/>}
                ListHeaderComponent={<HomeTitle />}
                onRefresh={onRefresh}
                refreshing={refreshing}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#0f7375', '#c2cd23']} // android only
                    />
                }
            />

            {/* Create new post button */}
            <AnimatedFAB
                icon={'plus'}
                label={'New Post'}
                extended={isExtended}
                onPress={() => props.navigation.navigate('Create Post')}
                visible={true}
                animateFrom={'right'}
                iconMode={'static'}
                style={[styles.fabStyle, props.style, fabStyle]}
            />
            {/* Snackbar to inform about some events such as (un)blocking a user */}
            <Snackbar
                visible={snackbarVisible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: 'Dismiss',
                    onPress: () => {
                        onDismissSnackBar()
                    },
                }}>
                {snackbarMessage}
            </Snackbar>
        </View>
    )
}

export default HomeFeed;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    },
    homeTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '2%',
    },
});