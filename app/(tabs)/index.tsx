import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
    </Tab.Navigator>
  );
}

function Library() {
  return (
    <View>
      <Text>
        Home Screen Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias sequi saepe, incidunt velit quam dolorum at ipsa recusandae
        aut reiciendis neque nulla autem rem esse inventore aspernatur sapiente
        fugit praesentium optio deserunt ab laboriosam. Aliquid quibusdam
        eveniet, magnam amet cupiditate quod dolores? Corrupti expedita maxime
        alias consequuntur amet inventore vitae dignissimos facilis accusantium
        dicta dolor ipsam quas perferendis, et saepe nisi illum numquam suscipit
        sunt cumque ullam error esse nam. Eaque, natus. Rem praesentium facere,
        doloribus non enim nesciunt et illo? Qui ex eveniet corrupti nisi,
        reprehenderit, saepe nostrum modi illo doloribus cum eligendi sequi ad!
        Eos esse neque minima veniam. Ut eum mollitia officiis fugit magni sequi
        aut dolore quisquam ipsum eligendi, odit recusandae placeat. Sapiente
        dolorum fugit deleniti voluptate doloremque nobis repellat velit earum
        autem accusantium accusamus optio ipsam modi qui id in maxime quibusdam
        temporibus officiis similique vero corporis, mollitia impedit possimus.
        Molestiae natus dolor voluptas iusto aliquam inventore? Deleniti quam
        est et dolor laboriosam, dolorem iure minus deserunt necessitatibus,
        recusandae, distinctio illum quibusdam ipsam consequatur voluptatum
        neque nisi alias nemo! Iste ad illo voluptatem vero doloremque cum nulla
        tempore quia tenetur mollitia, quas amet corrupti aut cumque, veniam
        assumenda asperiores laborum, natus ab et. Libero eum error consectetur
        nam ipsum quas aperiam! Sunt, sequi explicabo? Suscipit amet molestias
        accusantium eaque excepturi dicta deserunt. Quod facilis iusto quia
        recusandae veniam, consequatur debitis maiores mollitia nobis. Velit,
        similique laudantium? Laudantium, dolore porro. Optio, maiores harum cum
        obcaecati ipsa voluptates aliquid, voluptas ea voluptatum molestias quod
        dolorem quas hic nihil esse. Provident ipsum maiores culpa cupiditate
        animi dicta rerum voluptas earum facilis dolorem pariatur suscipit
        maxime laboriosam sapiente, qui itaque repellat? Molestiae itaque
        veritatis perspiciatis tempore numquam beatae dolore consectetur
        architecto sint, expedita accusamus praesentium amet, at odio
        voluptatibus in reiciendis, magni quasi ratione modi sit assumenda
        inventore quibusdam. Praesentium, sapiente voluptates? Qui sit iste odit
        neque repellendus. Assumenda possimus laboriosam excepturi ducimus
        aperiam fugiat voluptatum cumque nam odio minus.
      </Text>
    </View>
  );
}
function Liked() {
  return (
    <View>
      <Text>Liked Wallpapers</Text>
    </View>
  );
}
function Suggested() {
  return (
    <View>
      <Text>Suggested Wallpapers</Text>
    </View>
  );
}
