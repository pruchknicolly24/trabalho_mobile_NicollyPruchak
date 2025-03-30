import { StyleSheet, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FF0000', dark: '#FF0000' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">🔥 EXPLORE AS ÚLTIMAS POLÊMICAS! 🔥</ThemedText>
      </ThemedView>
      <ThemedText></ThemedText>
      <Collapsible title="💔 CASAL DO MOMENTO ANUNCIA SEPARAÇÃO E CHOCA FÃS!">
        <ThemedText>
          O que ninguém esperava aconteceu! O casal mais amado da mídia confirmou o fim do relacionamento, deixando os fãs completamente em choque! Fontes dizem que a separação aconteceu por motivos dramáticos, e uma traição estaria envolvida. As redes sociais não conseguem parar de comentar!{' '}
          <ThemedText type="defaultSemiBold"></ThemedText> {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}

        </ThemedText>
        <ExternalLink href="">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="🎤 CANTORA EXPLODE AO VIVO E BRIGA COM FÃ NO PALCO!">
        <ThemedText>
          O público foi pego de surpresa quando, no meio do show, a cantora famosa simplesmente perdeu o controle e começou uma briga feia com um fã!{' '}
          <ThemedText type="defaultSemiBold">Gritos e xingamentos ao vivo!</ThemedText> O que parecia ser apenas mais uma performance virou um dos maiores bafos do ano!
        </ThemedText>
      </Collapsible>
      {}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
