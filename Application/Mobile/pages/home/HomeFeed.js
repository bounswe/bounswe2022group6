/* eslint-disable prettier/prettier */
import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, RefreshControl, FlatList } from 'react-native';
import { AnimatedFAB, Button, Snackbar, Menu, ActivityIndicator, Text } from 'react-native-paper';
import PostPreview from '../post/PostPreview';
import { BACKEND_URL } from '@env'
import { handleGetUserData } from '../userAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Header after the top navigation bar
const HomeTitle = (props) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState({ icon: 'sort-clock-ascending', label: 'New Posts' });
    const closeMenu = () => setMenuVisible(false);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    const switchToPopularPosts = () => {
        setMenuAnchor({ icon: 'fire', label: 'Popular Posts' });
        props.setHomeFeedPosts((oldList) => {
            newList = JSON.parse(JSON.stringify(oldList))
            newList.sort((a, b) => b.vote_count - a.vote_count)
            return newList
        })
        closeMenu();
    }

    const switchToOldPosts = () => {
        setMenuAnchor({ icon: 'sort-clock-descending', label: 'Old Posts' });
        closeMenu();
    }

    const switchToNewPosts = () => {
        setMenuAnchor({ icon: 'sort-clock-ascending', label: 'New Posts' });
        props.setHomeFeedPosts((oldList) => {
            newList = JSON.parse(JSON.stringify(oldList))
            newList.sort((a, b) => {
                const a_datetime = new Date(a.created_at_date.split('.').reverse().join('-') + 'T' + a.created_at_time.split('.').join(':'))
                const b_datetime = new Date(b.created_at_date.split('.').reverse().join('-') + 'T' + b.created_at_time.split('.').join(':'))
                return b_datetime - a_datetime
            })
            return newList
        })
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
        console.log(BACKEND_URL)
        const response = await fetch(BACKEND_URL + 'contmgr/allposts/');
        const json = await response.json();
        return json.posts
    } catch (error) {
        console.error(error);
    }
}

// The home feed
const HomeFeed = (props) => {
    console.log(props.route.params)
    const [homeFeedPosts, setHomeFeedPosts] = useState([]);
    // Loading
    const [isFetchingData, setIsFetchingData] = useState(true);
    // Refresh
    const [refreshing, setRefreshing] = useState(false);
    const handleAllPosts = () => {
        getAllPosts().then((response) => {
            setHomeFeedPosts(response)
            console.log(response)
            setRefreshing(false)
            setIsFetchingData(false)
        })
    }
    const handleRefresh = useCallback(() => {
        setRefreshing(true)
        handleAllPosts()
    }, [])

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
        handleAllPosts();
    }, [])

return (
    <View style={{ height: '100%' }}>
        {/* Home feed */}
        <FlatList
            data={homeFeedPosts}
            renderItem={({ item }) => <PostPreview {...props} post={item} openSnackBar={openSnackBar} />}
            ListHeaderComponent={<HomeTitle setHomeFeedPosts={setHomeFeedPosts} />}
            ListEmptyComponent={isFetchingData ? <ActivityIndicator /> : <View style={styles.emptyFeed}><Text>Your feed is empty!</Text></View>}
            contentContainerStyle={{ flexGrow: 1 }}
            onScroll={handleOnScroll}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={handleRefresh}
                    colors={['#0f7375', '#c2cd23']} // android only
                />
            }
        />

        {/* Create new post button */}
        {props.route.params?.username &&
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
        }
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
    emptyFeed: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
});