import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './redux/maps';
import appStyles from './app-styles/appStyles';
import PrepareSection from './PrepareSection.jsx';
import RecepieSection from './RecepieSection.jsx';
import isWide from './app-styles/isWide';

function Main() {
  if (isWide(1024)) {
    return (
      <SafeAreaView style={appStyles().container}>
        <View style={appStyles().margins}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}>
            <PrepareSection />
          </ScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            alwaysBounceVertical={false}>
            <RecepieSection />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={appStyles().container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        <View style={appStyles().margins}>
          <PrepareSection />
          <RecepieSection />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
