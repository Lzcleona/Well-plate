import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:mobile_app/firebase/authentication.dart';
import 'constants.dart';
import 'deliveryDetails.dart';
import 'firebase/db.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        automaticallyImplyLeading: false,
        elevation: 0,
        backgroundColor: primaryColor,
        toolbarHeight: 80,
        title: SizedBox(
          height: 80,
          width: double.infinity,
          child: Image.asset(
            'assets/logo.png',
            fit: BoxFit.fitHeight,
          ),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.logout),
            onPressed: () {
              AuthenticationHelper().signOut(context);
            },
          ),
        ],
      ),
      body: StreamBuilder(
        stream: getDeliveries(),
        builder: (BuildContext context, AsyncSnapshot<QuerySnapshot> snapshot) {
          if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          }

          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          }

          return Padding(
            padding: const EdgeInsets.all(12),
            child: ListView(
              children: snapshot.data!.docs.map((DocumentSnapshot document) {
                String documentId = document.id;
                Map<String, dynamic> data =
                    document.data() as Map<String, dynamic>;
                return Card(
                  color: secondaryColor,
                  child: ListTile(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => DeliveryDetailsPage(
                                  data: data, id: documentId)),
                        );
                      },
                      title: Text(data['pickupLocationName']),
                      subtitle: Text(
                          ' ${data['pickupLocationAddress']} \nBags to Pick Up: ${data['bagsToPickUp']}'),
                      trailing: Text(
                        data['volunteerId'] == null
                            ? 'Not Selected'
                            : 'Already Selected',
                        style: TextStyle(
                            color: data['volunteerId'] == null
                                ? Colors.black
                                : Colors.red),
                      )),
                );
              }).toList(),
            ),
          );
        },
      ),
    );
  }
}
