import { View, Text, StatusBar, TextInput, TouchableOpacity } from 'react-native'

import React from 'react'

const Authenticate = () => {
    return (
        <View>
            <TextInput>
                Auth
            </TextInput>
        </View>

        // <View style={tw`flex-1 justify-center items-center`}>
        //     <TextInput
        //         placeholder="Username"
        //         style={tw`border border-gray-300 p-2 rounded mb-2 w-64`}
        //     />
        //     <TextInput
        //         placeholder="Password"
        //         secureTextEntry={true}
        //         style={tw`border border-gray-300 p-2 rounded mb-2 w-64`}
        //     />
        //     <TouchableOpacity
        //         onPress={() => {}}
        //         style={tw`bg-blue-500 text-white p-2 rounded`}
        //     >
        //         <Text style={tw`text-center text-white`}>Login</Text>
        //     </TouchableOpacity>
        //     <View style={tw`mt-4`}>
        //         <Text style={tw`font-bold`}>
        //             Don't have an account?
        //             <TouchableOpacity
        //                 onPress={() => {}}
        //                 style={tw`bg-blue-500 text-white p-2 rounded mt-2`}
        //             >
        //                 <Text style={tw`text-center text-white`}>Sign Up</Text>
        //             </TouchableOpacity>
        //         </Text>
        //     </View>
        // </View>
    )
}

export default Authenticate;