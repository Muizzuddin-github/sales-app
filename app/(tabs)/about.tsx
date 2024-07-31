import { styled, withExpoSnack } from "nativewind";
import React from "react";
import { Text, View } from "react-native";

const StyledView = styled(View);
const StyledText = styled(Text);

const about = () => {
  return (
    <StyledView className="bg-slate-600">
      <StyledText className="text-2xl text-red-600">Hello World</StyledText>
    </StyledView>
  );
};

export default withExpoSnack(about);
