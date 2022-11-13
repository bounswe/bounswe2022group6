/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { AnimatedFAB, Button, Snackbar, Title, Menu } from 'react-native-paper';
import PostPreview from '../post/PostPreview';

// Dummy data (need to delete this later)
const dummyData = [
    {
        key: 1, postTitle: 'I pulled shoulder. This is a day after bowling',
        postAuthor: 'nevermindever42',
        authorProfilePhoto: 'https://randomuser.me/api/portraits/men/60.jpg',
        cardCover: 'https://preview.redd.it/qenk7995rwn41.jpg?width=640&crop=smart&auto=webp&s=c98f07f965ca5b304dfa59c02baf6133a0f4a17e',
        upvote: 22,
        downvote: 1,
        comment: 7,
        labels: [{text: 'Pain Lvl 4-6', color: '#d32f2f'}],
        nsfw: true,
        cardContent: 'It is not as bad as it seems.'
    },
    {
        key: 2, postTitle: 'What are these small bumps? It seems to be increasing and spreading',
        postAuthor: 'neuraljamkoala',
        authorProfilePhoto: 'https://randomuser.me/api/portraits/women/43.jpg',
        cardCover: 'https://preview.redd.it/sn5tuiokujz91.jpg?width=640&crop=smart&auto=webp&s=ad0aa3429c384ce07a6fbdf5253d540f1f9ee33d',
        upvote: 10,
        downvote: 1,
        comment: 2,
        nsfw: false,
        labels: [{text: 'Skin Issues', color: '#e64a19'}, {text: 'Rashes', color: '#e64a19'}, {text: 'Freckles', color: '#e64a19'}],
    },
    {
        key: 3, postTitle: 'My pits sweat when I\'m cold',
        postAuthor: 'skinny21gemini',
        authorProfilePhoto: 'https://randomuser.me/api/portraits/men/11.jpg',
        // cardCover: 'https://picsum.photos/700',
        upvote: 4,
        downvote: 1,
        comment: 183,
        nsfw: false,
        cardContent: 'Hey all, it\'s not as simple as the title but that\'s as concise as I could make it without being verbose. So I\'ve had this problem for years. I go through several shirts in the morning before I even leave the house. It\'s not just when I\'m cold, I sweat a lot when it\'s hot too. This is more like nervous perspiration than healthy sweat, and it only comes from my pits. It\'s very annoying when it\'s winter time because it makes me very cold having wet underarms all the time. What is going on with me??? I need some help.'
    },
    {
        key: 4, postTitle: 'Longterm affects of carbon monoxide poisoning?',
        postAuthor: 'smoothieMonsterxx',
        authorProfilePhoto: 'https://randomuser.me/api/portraits/women/17.jpg',
        upvote: 83,
        downvote: 45,
        comment: 1,
        labels: [{text: 'Poisoning', color: '#689f38'}, {text: 'Question', color: '#0097a7'}],
        nsfw: false,
        cardContent: 'When I was 3 years old we moved, it was an older house and unfortunately there was some issue or something or another and we all got monoxide poisoning. I only know about this because my mom was joking about how she only found out because I was complaining about headaches. So I guess I\'m wondering if that had some sort of neurological or physical effect on me. Whether it was depression from a young age, or asthma, I don\'t know. Could be related but could also just be poor genetics and a bad childhood. Jw.'
    },
    {
        key: 5, postTitle: 'Bump on arm? It\'s firm and uncomfortable. Got bigger since yesterday. Should I be worried?',
        postAuthor: 'aquabat',
        authorProfilePhoto: 'https://randomuser.me/api/portraits/men/3.jpg',
        cardCover: 'https://preview.redd.it/a0ryt7l4ujz91.jpg?width=640&crop=smart&auto=webp&s=7af3e2924c8b06b12f1609cb035bee50b24b472d',
        upvote: 126,
        downvote: 1,
        comment: 7,
        nsfw: false,
        labels: [{text: 'Bones/Joints/Ligaments', color: '#455a64'}]
    },
    {
        key: 6, postTitle: 'I had an MRI and I have been worried about this hole. Is it normal?',
        postAuthor: 'pleasant_peach',
        authorProfilePhoto: 'https://randomuser.me/api/portraits/women/50.jpg',
        cardCover: 'https://preview.redd.it/m6e8mhf19dr61.jpg?width=640&crop=smart&auto=webp&s=978d17f0850e92bcabaa714c44535a85d6fd2e35',
        upvote: 2,
        downvote: 4,
        comment: 3,
        nsfw: false,
        cardContent: 'I had the MRI because of a balancing disorder, but it\'s all good now',
        labels: [{text: 'Brain', color: '#1976d2'}]
    },

];

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
        setMenuAnchor({ icon: 'fire', label: 'Popular Posts' })
        closeMenu()
    }

    const switchToOldPosts = () => {
        setMenuAnchor({ icon: 'sort-clock-descending', label: 'Old Posts' })
        closeMenu()
    }

    const switchToNewPosts = () => {
        setMenuAnchor({ icon: 'sort-clock-ascending', label: 'New Posts' })
        closeMenu()
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

// The home feed
const HomeScreen = ({ animateFrom, style }) => {
    // Refresh
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);

    // Search bar
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
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

    const fabStyle = { [animateFrom]: 16 };

    return (
        <View>
            {/* Home feed */}
            <ScrollView onScroll={handleOnScroll}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        colors={['#0f7375', '#c2cd23']} // android only
                    />}>
                {/* Header */}    
                <HomeTitle />
                {/* Post Previews */}
                {dummyData.map(post => <PostPreview {...post} openSnackBar={openSnackBar} />)}

            </ScrollView>

            {/* Create new post button */}
            <AnimatedFAB
                icon={'plus'}
                label={'New Post'}
                extended={isExtended}
                onPress={() => console.log('Pressed new post button!')}
                visible={true}
                animateFrom={'right'}
                iconMode={'static'}
                style={[styles.fabStyle, style, fabStyle]}
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

export default HomeScreen;

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