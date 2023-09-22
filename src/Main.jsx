import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './redux/maps';
import appStyles from './app-styles/appStyles';
import PrepareSection from './PrepareSection';
import RecipeSection from './RecipeSection';
import isWide from './app-styles/isWide';
import DefaultScrollView from './components/DefaultScrollView';

function Main() {
  if (isWide(1024)) {
    return (
      <SafeAreaView style={appStyles().container}>
        <View style={appStyles().margins}>
          <DefaultScrollView>
            <PrepareSection />
          </DefaultScrollView>
          <DefaultScrollView>
            <RecipeSection />
          </DefaultScrollView>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={appStyles().container}>
      <DefaultScrollView>
        <View style={appStyles().margins}>
          <PrepareSection />
          <RecipeSection />
        </View>
      </DefaultScrollView>
    </SafeAreaView>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
