import React, { useEffect, useState } from 'react'
import { Platform, Text, View } from 'react-native'
import { Fields, getContactsAsync, requestPermissionsAsync } from 'expo-contacts'

export const Home: React.FC = () => {
  const [contacts, setContacts] = useState<string[]>([])
  async function getContacts() {
    if (Platform.OS !== 'web') {
      const { status } = await requestPermissionsAsync()
      if (status === 'granted') {
        const { data } = await getContactsAsync({
          fields: [Fields.Name]
        })
        setContacts(data.map(x => x.name))
      }
    }
  }

  useEffect(() => {
    getContacts()
  }, [])

  return (
    <View>
      {contacts.map(contact => (
        <Text>{contact}</Text>
      ))}
    </View>
  )
}
