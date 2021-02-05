import { SoundPlayer } from './sound-player'

class SoundPlayerConsumer {
  constructor() {
    this.soundPlayer = new SoundPlayer()
  }

  playSomethingCool() {
    const coolSoundFileName = 'song.mp3'
    this.soundPlayer.playSoundFile(coolSoundFileName)
  }
}

jest.mock('./sound-player')

it('should play sound file', () => {
  const soundPlayerConsumer = new SoundPlayerConsumer()

  soundPlayerConsumer.playSomethingCool()

  expect(SoundPlayer.mock.instances[0]).toEqual([])
})
